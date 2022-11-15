import baseURL from "./baseURL";

const fetchCoursesByName = async (name) => {
  try {
    const response = await fetch(`${baseURL}/courses?title=${name}`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
  return null;
};

export default fetchCoursesByName;
