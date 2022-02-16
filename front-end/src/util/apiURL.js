export const apiURL = () => {
	return window.location.hostname === "localhost"
		? "http://localhost:3333"
		: "https://serene-peak-15778.herokuapp.com/";
};
