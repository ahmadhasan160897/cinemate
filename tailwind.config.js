module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        minHeight: {
          "90vh": "1.25rem",
        },
        screens: {
          "other": {'min': '340px', 'max': '1500px'},
        },
        colors: {
          darkbg: "#1E293B",
          blue:{
            850: "#1e40af"
          }
        }
      },
    },
    plugins: [],
  }