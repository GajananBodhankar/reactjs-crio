import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Child from "./ChildOne.tsx";

function Parent() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
        consectetur reprehenderit, aliquid quibusdam expedita laborum itaque eum
        amet placeat accusamus. Sit sunt porro vitae facere unde deserunt quos,
        aut provident rerum ipsum dolores, earum ducimus repellat eos temporibus
        ex pariatur ab maxime omnis totam ullam. Facere doloribus assumenda quod
        corrupti numquam necessitatibus aut nesciunt. Assumenda architecto quod
        vel itaque iure voluptate, voluptatibus provident. Rem modi eos
        distinctio recusandae ullam consequuntur commodi nisi non vitae esse,
        inventore, dicta vel, error cumque quas odio tenetur sequi? Eius, enim?
        Facere, illo incidunt corrupti soluta quam possimus tenetur suscipit?
        Voluptates nemo facilis illum?
      </p>

      <Outlet context={[count, setCount]} />
      <button onClick={() => navigate("/child")}>Click</button>
    </div>
  );
}

export default Parent;
