class HomeController < ApplicationController
  def index
    @insights_props = { name: "Stranger" }
  end
end
