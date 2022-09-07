require_relative '../config/environment'
require 'pry'
require 'active_record'

class User < ActiveRecord::Base
end


binding.pry