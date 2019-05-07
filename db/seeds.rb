# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create!(name: 'Daniel', comment: 'Love it', photo: 'https://psdnyc.com/wp-content/uploads/2016/05/PSD-Daniel-Restaurant-Signage-2.jpg')
Restaurant.create!(name: 'Gramercy Tavern', comment: 'Great food!', photo: 'https://static1.squarespace.com/static/56420dcce4b002d13abe2e0a/t/56bb1a699f72661958f28e48/1455102570354/roberto%27s_real_american_tavern_gallery4.jpg?format=1500w')
Restaurant.create!(name: 'Nix', comment: 'Nice atmosphere', photo: 'https://dudo6el28sqqp.cloudfront.net/gothamistgallery/2016/4/13/4a9e6c91b.jpeg')
Restaurant.create!(name: 'Tempura Matsui', comment: 'The service is excellent', photo: 'https://cdn.vox-cdn.com/thumbor/n3jeGJ3DOgBuO4GKsXqy1FlQ-FQ=/98x0:897x599/1200x800/filters:focal(98x0:897x599)/cdn.vox-cdn.com/uploads/chorus_image/image/47684117/20150724-Tempura_Matsui-6.0.0.0.jpg')


puts "#{Restaurant.count} restaurants created!"