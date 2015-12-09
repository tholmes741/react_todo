class Api::StepsController < ApplicationController
  def index
    puts params[:todo_id]
    todo = Todo.find(params[:todo_id])
    render json: todo.steps
  end

  def create
    step = Step.new(step_params)
    step.todo_id = params[:id]
    create!(step)
    render json: step
  end

  def update
    step = Step.find(params[:id])
    step.update!(step_params)
    render json: step
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy!
    render json: step
  end

  private
  def step_params
    params.require(:step).permit(:body)
  end

end
