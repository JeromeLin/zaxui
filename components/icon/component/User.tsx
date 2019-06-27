import React from 'react';

const SvgUser = props => (
  <svg
    className="user_svg__icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M515.479 14.23c-274.026 0-496.942 222.946-496.942 496.942 0 274.01 222.916 496.926 496.942 496.926 273.98 0 496.926-222.916 496.926-496.926 0-273.996-222.931-496.941-496.926-496.941zm286.464 864.513C787.29 733.56 664.41 619.896 515.463 619.896c-148.946 0-271.826 113.68-286.463 258.847-109.373-85.43-179.863-218.368-179.863-367.571 0-257.145 209.212-466.387 466.357-466.387 257.13 0 466.341 209.242 466.341 466.387-.015 149.203-70.505 282.172-179.892 367.57z" />
    <path d="M511.714 241.83c-89.766 0-162.816 73.065-162.816 162.816s73.065 162.8 162.816 162.8c89.72 0 162.786-73.035 162.786-162.8S601.434 241.83 511.714 241.83z" />
  </svg>
);

export default SvgUser;