import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Breadcrumb({ list }) {
  return (
    <section className="bg-white py-3 ">
      <div className=" bg-gray-100   ">
        <ul className=" flex p-5 mt-10 text-xl ">
          {list?.map?.((item, index) => {
            const arias =
              index === list?.length ? { 'aria-label': 'current-page' } : {};
            return (
              <li key={item.url}>
                <Link className="m-5 font-light" to={item.url} {...arias}>
                  / {item.name}
                </Link>
              </li>
            );
          })}

          {/* <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">
              Details
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};

export default Breadcrumb;
