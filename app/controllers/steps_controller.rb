class StepsController < ApplicationController
  def index
    todo = Todo.find(params[:id])
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
