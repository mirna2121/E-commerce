import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../../components/NavHeader/NavHeader";
import { useCategories } from "../../store";

export default function Products() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const { data: categories, resetActiveId, active_cat_id } = useCategories();
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(() => {
    let obj = categories.find((el) => {
      return el.documentId == active_cat_id;
    });
    if (obj) {
      setCategoryInfo(obj);
      setCheck(true);
    } else {
      navigate("/error");
    }
    return () => {
      resetActiveId();
    };
  }, []);

  return (
    check && (
      <div>
        <NavHeader tabName={categoryInfo.name} />
        <h1>Products in Cat : {categoryInfo.name}</h1>
      </div>
    )
  );
}
