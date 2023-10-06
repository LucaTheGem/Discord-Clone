class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, :birth_date, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :tag, uniqueness: { scope: :username, message: 'username / tag is avaliable'}, presence: true, length: { is: 4 }
    validates :terms_of_service, acceptance: true
    #remember to add validation for 4 digit integer tag and birth date, as well as migrate columns into
    #database
    #make tag + username combination uniqueness not just the tag 
    has_many :friends,
        foreign_key: :friend_id,
        class_name: :Friend
    
    has_many :servers,
        foreign_key: :owner_id,
        class_name: :Server
    
    has_many :channels,
        foreign_key: :member_id,
        class_name: :Channel
    
    has_one_attached :avatar

    has_one_attached :coverphoto

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
    
end