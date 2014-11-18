require 'sinatra'

get '/' do
	erb :searchPage
end

get '/movies' do
	searchString = params[:q]
	"You searched for #{searchString}"
end

