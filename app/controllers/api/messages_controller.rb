class Api::MessagesController < ApplicationController
  def index
   
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @members = @group.users
    respond_to do |format|
      format.html
      format.json { @messages = @messges.where("id > ?", params[:last_id]) }
    end 
  end
end
