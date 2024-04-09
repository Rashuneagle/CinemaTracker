module.exports = {  
  // Helper function to generate emoji for movies
  get_movie_emoji: function() {
    // Emoji options for movies
    const emojis = ["🎬", "🍿", "🎥"];
    // Randomly select an emoji
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  },
  
  // Helper function to generate emoji for shows
  get_show_emoji: function() {
    // Emoji options for shows
    const emojis = ["📺", "🎭", "🎞️"];
    // Randomly select an emoji
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
};
