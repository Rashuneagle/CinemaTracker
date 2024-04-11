// Define the middleware function named withAuth
const withAuth = async (req, res, next) => {
  try {
    // Check if the user is logged in
    if (!req.session || !req.session.loggedIn) {
      // If not logged in, redirect to the login page
      return res.redirect('/login');
    }
    // Fetch user data if needed
    //const userData = await User.findByPk(req.session.userId);

    // Render the dashboard template with user data
    res.render('dashboard', {
      // Pass the logged-in status to the dashboard template
      loggedIn: req.session.loggedIn,

      // Pass user data if available, otherwise pass null
   //   user: userData ? userData.get({ plain: true }) : null
    });
  } catch (error) {
    // Handle errors
    console.error('Error in withAuth middleware:', error);


    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = withAuth;
