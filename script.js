const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Princess Sewa ❤',
    position: 'Sister',
    text:
    " Happy Birthday my wonderful brothers Taiwo and Kehinde. <br> I love you so much and I hope this day brings you as much Joy as your heart craves for and so much more.<br>cheers to many more years 🎈🎁"
  },
  {
    name: 'Baby T',
    position: 'Brother',
    text:
    "Happy birthday Bro Tee and Kay <br> Congratulations on another amazing year. I pray that God fulfills all your heart desires and I pray for sound health.<br>Thanks for being such an amazing big brother Where I for Dey if not for you😭😭😭oo.Thanks for making it your responsibility. Thanks for the constant push. Thanks for always being there for me. Thanks for the plenty money. Love"
  },
  {
    name: 'Daddy',
    position: 'Father',
    text:
      "Happy birthday to my Taiye & kehinde with a difference. Seun & Femi with a mission to make your mark of distinction to your world. God is on your side on all spheres. Enjoy your day with best wishes from Daddy ,mummy & your siblings. LOVE  U !.",
  },
  {
    name: 'Mummy',
    position: 'Mother',
    text:
      "Glory be to God for this great gifts. Your increase is unlimited and your expectation is boundless as you graciously grow into God, May the heavens shower you both will endless blessings, love and happiness on this special day and in every days of your life. I pray a life filled with joy, love and prosperity. May God's Grace continue to light your paths, guiding you towards a future filled with success and contentment. In Jesus name amen.Happy birthday to my sweet and adorable twins Taiwo Oluwaseun and Kehinde Oluwafemi. Love you. Cheers and enjoy your day's purpose you. Happy birthday to my beloved Taiwo and Kehinde. May the present of God always be with you in Jesus name amen. Love you ❤️",
  },
  {
    name: 'Topsy',
    position: 'Friend',
    text:
      "Happy birthday Taiwo,You have been a friend through and true! It’s been a roller coaster of a year but all in all the amazing person that you are shone through at every juncture and I can’t but appreciate you over and over again! Thanks for being my vent buddy, my shrink, financial adviser and everything in between. I pray for you this year, may your sail be smooth and may the good Lord Almighty meet you before even the need arises! Love you Taiwo 😊",
  },
  {
    name: 'Domoge',
    position: 'Friend',
    text:
    'Happy Birthday SeniorTwins of the Odugbez Family!!!<br>My Brothers from another Mama!!! <br> God bless you both Squeeze hugs ...lots of love',
  },
  {
    name: 'Becky',
    position: 'Friend',
    text:
    'Big shout out to Twinnies  Taiwo❤️ and Kehinde. Dec 11th is here and it is a  special day as well. A day when the best twin I know was born.Here is to more life , love and adventures along the way.I hope you enjoy your special day to the fullest. Cheers to having the absolute best day ever💯.Lots of love from Becks 🫶🏼🫶🏼'
  },
  {
    name: 'Tosin Awopegba',
    position: 'Friend',
    text:
      'Happy birthday Tee and okpolo!!! It is always exciting to have birthdays! And I pray that you do not only feel excited today, but the blessings of a new age truly be yours. Scripture says, it is the Lord that satisfy our desires with good things so that our youth are renewed like the eagles. I pray that your desires are indeed satisfied with good things and your youths renewed like the eagles! Nations will come to your lights and Kings will come to the brightness of your rising! The Lord will show you both great favour and His peace will always be your companions. Have a blessed year buddies! Happy birthday. Okpolo stay tuned for more tickles🥰',
  },
  {
    name: 'Seyi Awopegba',
    position: 'Friend',
    text:
      'Happy birthday T and K. I wish a beautiful year in good health, joy, peace, outstanding blessings , good health and long life in Jesus name🤗🤗🤗🤗🤗',
  },
  {
    name: 'Abolade Olanikpekun',
    position: 'Sister',
    text:
      'Happy Bithday Ejime.',
  },
  {
    name: 'Baby K',
    position: 'Brother',
    text:
      'Happy birthday to the older gbesans, live long and prosper 🥂🎂🥳.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, text } = testimonials[idx]

  testimonial.innerHTML = text
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
