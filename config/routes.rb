Rails.application.routes.draw do
  get 'introduction' , to: 'users#home'
  get 'about' , to: 'users#about'
  get 'hobbies' , to: 'users#hobbies'
  get 'university' , to: 'users#university'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
