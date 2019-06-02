class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group.users << currrent_user
  end

  def create
    @group = Group.new(group_paramas)
    if @group.save
      redirect_to root_path, notice: 'グループ作成しました'
    else
      render  :new
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => []})
  end
end
