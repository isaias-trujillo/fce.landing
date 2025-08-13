const pictures = [
  {
    // url: "https://images.pexels.com/photos/15317176/pexels-photo-15317176.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/62213469_2048531845276072_2002543040224296960_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=a2w1JjG9qHoQ7kNvwFdYhUU&_nc_oc=AdnqwvxO039BS18EXA7M6eJMO7ZnCerxs62uUpMA_HMoljUiUBX0VosRv1mLNUPJxSE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=V5ofTJkrs2D4K7jkbmYXpg&oh=00_AfWAbDB3v1jvUqC0qmB_4XZ9Ut4ZjTjfhU6TXovIVvwmEw&oe=68B895A0",
    alt: "Mujer apuntando en blanco y negro",
  },
  {
    // url: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/505633291_9645770295552151_2037255946174790819_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=1JLhASUSRJIQ7kNvwFG6_8v&_nc_oc=Adl-2YgRJQ2eA_7iYa3ri2HT1kBZoHyKJretFNlZHBddjevFOMGZL1jYVGGinvRodIg&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=R1ID71u_KlkmYJcGM1tIfw&oh=00_AfUvlEp3ffjHv77vp8VpyvsDqKGo6CLlGT73Ssx0jTuRxw&oe=6896E5E4",
    alt: "Mujer de traje apuntando",
    className: "aspect-[9/12]",
  },
  {
    // url: "https://images.pexels.com/photos/17059193/pexels-photo-17059193.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/506022033_9652040838258430_8390028715263567349_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=zZ1H2_EtiXsQ7kNvwGWiVVm&_nc_oc=Adk3E29fUcRASJX0wPNseJthLuGxj3mH0XzlMUGQ1uG37p-PK2mUVrAnBFRNQZGJzCs&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=hTjOmEeIsHeZfpPkQCD0Mg&oh=00_AfWJXPVqbN3gqrf-Ur5LQ4yPyFmowB2nj5M2OG-5GDj2Cg&oe=6896F69E",
    alt: "Catedral de Lima",
    className: "aspect-[9/14]",
  },
  {
    // url: "https://images.pexels.com/photos/6814528/pexels-photo-6814528.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/505922794_9646362628826251_7600524586250625879_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=caYPlr6EEiQQ7kNvwGCtqId&_nc_oc=AdlG7AWPQQQZMggNvLeUW3u7MRzNyBX4W5EMiHu_DgedlHL37dkhKNYTAb46nMC_XFg&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Y567NMCxTfTjb-LpJl-lkQ&oh=00_AfXGUvSRK6LtC3eHgtXab7AsZFUQIYcVT4hQ1IZCu_T4Pw&oe=6896E876",
    alt: "Consulta con el especialista",
  },
  {
    // url: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/56414033_1941868642609060_1272224348786130944_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=skq0tIDjsjEQ7kNvwHMysI1&_nc_oc=Adkr3sntj7d8jvav7ORqMeVHoX5XAyBBdGKIov7OaqMZNXO2BvArlKQ9VpZ7mSkeJIQ&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=0BFndyGM1SfleuGn2VYimw&oh=00_AfVWCP9mma3u5JCaprayUgss8Ezw_s4oCWU9rc8iprZiPg&oe=68B878CB",
    alt: "Grupo de personas estrechando manos",
  },
  {
    // url: "https://images.pexels.com/photos/3204350/pexels-photo-3204350.jpeg",
    url: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/56201148_1941868392609085_8108248864382779392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mi8V1HVt_3YQ7kNvwF2G6A2&_nc_oc=AdmpEvSa3IO_0GhGMK4XJhQKmWCKxhfGO9er3bEQkwDb5c3aRvRJ_XowCUd1WnNCGts&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=oARXTzVjl6atzsLI9oZe9Q&oh=00_AfUmA9whZg4aZIOR8liUC07dntRqoVFPpGuJq5hyMiCCDw&oe=68B8A060",
    alt: "Lima",
    className: "aspect-[9/14]",
  },
] satisfies Record<string, any>;

export default pictures;
