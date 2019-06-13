class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @message = @group.messages.includes(:user)
    @messages = @message.where('id > ?', params[:last_id])
  end
end
