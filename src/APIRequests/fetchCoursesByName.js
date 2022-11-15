import baseURL from "./baseURL";

const fetchCoursesByName = async ({ name }) => {
  try {
    const response = await fetch(`${baseURL}/courses?title=${name}`);
    return response.json();
  } catch (err) {
    console.error(err);
  }
  return null;
};

export default fetchCoursesByName;
