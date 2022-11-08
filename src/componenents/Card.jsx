import { useEffect, useState } from 'react';
// https://orange-evolution.up.railway.app/courses/1

function Card(props) {
  console.log(props);
  const { data } = props;
  // const [course, setCourse] = useState(null);

  const img =
    'https://images.unsplash.com/photo-1597806999047-9456837df754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTYxMjYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

  // useEffect(() => {
  //   const data = fetch('https://orange-evolution.up.railway.app/courses/1')
  //     .then((response) => response.json())
  //     .then((data) => setCourse(data));
  // }, []);

  console.log(data);

  return (
    <div>
      <div>
        <div>
          <img src={img} />
          <span>{data?.author}</span>
        </div>
        <div>{data?.length}</div>
      </div>
      <div>{data?.nameCourse}</div>
    </div>
  );
}

export default Card;

/*
{
    "id": 1,
    "nameCourse": "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
    "type": 2,
    "author": 1,
    "length": "00:06:00",
    "status": 1,
    "url": "https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",
    "roadmap": 4,
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
}
*/
