var user = {
    profile_sidebar_fill_color: "DDEEF6",
    profile_sidebar_border_color: "C0DEED",
    profile_background_tile: false,
    name: "Sean Cummings",
    profile_image_url: "http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    created_at: "Mon Apr 26 06:01:55 +0000 2010",
    location: "LA, CA",
    follow_request_sent: null,
    profile_link_color: "0084B4",
    is_translator: false,
    id_str: "137238150",
    default_profile: true,
    contributors_enabled: false,
    favourites_count: 0,
    url: null,
    profile_image_url_https: "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    utc_offset: -28800,
    id: 137238150,
    profile_use_background_image: true,
    listed_count: 2,
    profile_text_color: "333333",
    lang: "en",
    followers_count: 70,
    protected: false,
    notifications: null,
    profile_background_image_url_https: "https://si0.twimg.com/images/themes/theme1/bg.png",
    profile_background_color: "C0DEED",
    verified: false,
    geo_enabled: true,
    time_zone: "Pacific Time (US & Canada)",
    description: "Born 330 Live 310",
    default_profile_image: false,
    profile_background_image_url: "http://a0.twimg.com/images/themes/theme1/bg.png",
    statuses_count: 579,
    friends_count: 110,
    following: null,
    show_all_inline_media: false,
    screen_name: "sean_cummings"
};

var propertiesNames = Object.keys(user);
console.log(propertiesNames);

/*
[
  'profile_sidebar_fill_color',
  'profile_sidebar_border_color',
  'profile_background_tile',
  'name',
  'profile_image_url',
  'created_at',
  'location',
  'follow_request_sent',
  'profile_link_color',
  'is_translator',
  'id_str',
  'default_profile',
  'contributors_enabled',
  'favourites_count',
  'url',
  'profile_image_url_https',
  'utc_offset',
  'id',
  'profile_use_background_image',
  'listed_count',
  'profile_text_color',
  'lang',
  'followers_count',
  'protected',
  'notifications',
  'profile_background_image_url_https',
  'profile_background_color',
  'verified',
  'geo_enabled',
  'time_zone',
  'description',
  'default_profile_image',
  'profile_background_image_url',
  'statuses_count',
  'friends_count',
  'following',
  'show_all_inline_media',
  'screen_name'
]
*/

//-----------------------------------------

propertiesNames.forEach(function(property) {
    console.log(user[property]);
  });

/*
DDEEF6
C0DEED
false
Sean Cummings
http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg
Mon Apr 26 06:01:55 +0000 2010
LA, CA
null
0084B4
false
137238150
true
false
0
null
https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg
-28800
137238150
true
2
333333
en
70
false
null
https://si0.twimg.com/images/themes/theme1/bg.png
C0DEED
false
true
Pacific Time (US & Canada)
Born 330 Live 310
false
http://a0.twimg.com/images/themes/theme1/bg.png
579
110
null
false
sean_cummings
*/

//-----------------------------------------

function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        // sum = sum + arguments[i];
        sum += arguments[i]; // Alternative way
    }
    console.log(sum);
    return sum;
}

// Passing 5 numbers to "add" function

add(1,2,3,4,5); // 15

// Passing 10 numbers to "add" function

add(1,2,3,4,5,6,7,8,9,10); // 55