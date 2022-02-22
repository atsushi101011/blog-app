class V1::BlogsController < ApplicationController
  def index
    blogs = Blog.all
    render json: blogs
  end

  def update
    blog = Blog.find(params[:id])
    if blog.update(blog_params)
      render json: blog
    else
      render json: blog.errors
    end
  end

  def create
    blog = Blog.new(blog_params)
    if blog.save
      render json: blog, status: :created
    else
      render json: blog.errors, status: :unprocessable_entity
    end
  end

  def destroy
    blog = Blog.find(params[:id])
    if blog.destroy
      render json: blog
    end
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :body)
  end
end