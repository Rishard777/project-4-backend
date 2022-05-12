puts "🏕 Seeding users..."
user1 = User.create(name: 'Rishard', admin: true, password: 'password')
user2 = User.create(name: 'Asher', admin: true, password: 'password')

puts "🏕 Seeding instruments..."
instrument1 = Instrument.create(name: '3D Printed Guitar', image: 'https://inspirationfeeed.files.wordpress.com/2013/04/272352196572485399_02dc48c607171.jpg', price: 699.59)
instrument2 = Instrument.create(name: 'IK Guitar', image: 'https://inspirationfeeed.files.wordpress.com/2013/04/8304a2336d531e3126a216db0c13ef981.jpg', price: 728.43)
instrument3 = Instrument.create(name: 'Lego Guitar', image: 'https://inspirationfeeed.files.wordpress.com/2013/04/231812577_05a76f931fde1.jpg', price: 800.99)
instrument4 = Instrument.create(name: 'Rise Guitar', image: 'https://inspirationfeeed.files.wordpress.com/2013/04/250990123_d05551767c0a1.jpg', price: 11749.89)

instrument5 = Instrument.create(name: 'Bluthner Lucid iDyllic Excellence Piano', image: 'https://luxury-pianos.com/wp-content/uploads/2020/03/Bluthner-iDyllic-Excellence-transparent-piano.jpg', price: 5899.99)
instrument6 = Instrument.create(name: 'Alligator Green TransLucid Piano', image: 'https://luxury-pianos.com/wp-content/uploads/2020/03/acrylic-green-baby-grand-piano.jpg', price: 13999.00)
instrument7 = Instrument.create(name: 'Gold TransLucid Tiara Piano', image: 'https://luxury-pianos.com/wp-content/uploads/2020/08/Translucid-Tiara_gold.jpg', price: 29189.99),
instrument8 = Instrument.create(name: 'Rose Gold TransLucid Tiara Piano', image: 'https://luxury-pianos.com/wp-content/uploads/2020/08/Translucid-Tiara_pink-blush-with-gold.jpg', price: 23499.49),

instrument9 = Instrument.create(name: 'Spaun Drums LED Lighted Acrylic Drum Kit', image: 'https://img.audiofanzine.com/img/product/normal/1/0/108802.jpg?fm=webp&w=600&h=436&fit=max&s=fc56b9c813e00b5ea65be7eefff330a8', price: 1669.49),
instrument10 = Instrument.create(name: 'Staccato Drumset', image: 'https://i.pinimg.com/originals/77/2a/d6/772ad6435b4c4615ccb1abca83653f56.jpg', price: 2299.99)

puts "🏕 Seeding reviews..."
Review.create(user_id: user1.id, instrument_id: instrument1.id, description: 'Awesome')

puts "✅ Done seeding!"