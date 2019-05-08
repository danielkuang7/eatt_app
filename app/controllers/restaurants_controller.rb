class RestaurantsController < ApplicationController
    before_action :set_restaurant, only: [:show, :update, :destroy]
  
    # GET /restaurants
    def index
      @restaurants = Restaurant.all
  
      render json: @restaurants
    end
  
    # GET /restaurants/1
    def show
      render json: @restaurant
    end
  
    # POST /restaurants
    def create
      @restaurant = Restaurant.new(restaurant_params)
  
      if @restaurant.save
        render json: @restaurant, status: :created, location: @restaurant
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /restaurants/1
    def update
      if @restaurant.update(restaurant_params)
        render json: @restaurant
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_restaurant
        @restaurant = Restaurant.find(params[:id])
        rescue ActiveRecord::RecordNotFound
        render json: { message: 'no restaurant matches that ID' }, status: 404
      end
  
      # Only allow a trusted parameter "white list" through.
      def restaurant_params
        params.require(:restaurant).permit(:name, :comment, :photo)
      end
  end
  
