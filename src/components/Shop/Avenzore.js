import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import classes from './Avenzore.module.css';

const Avenzore = () => {
  return (
    <Card className={classes.header}>
      <Link to="/Alert">
        <ul>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_augmatex1000_6.jpg"
              alt="augmatex1000"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_ciplox500.jpg"
              alt="ciplox500"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_ciplox750.jpg"
              alt="ciplox750"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_doublenix750000.jpg"
              alt="doublenix"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_doublenix_fort1500000.jpg"
              alt="doublenix_fort"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/prod_thumb20151219144621.jpg"
              alt="ben_u_ron"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/prod_thumb20151220102553.jpg"
              alt="celoxib100"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/prod_thumb20151220102710.jpg"
              alt="celoxib200"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_diclomol.jpg"
              alt="diclomol"
            />
          </li>
          <li>
            <img
              src="https://www.avenzor.net/img/uploads1/thumb_diclo_smart.jpg"
              alt="diclosmart"
            />
          </li>
        </ul>
      </Link>
    </Card>
  );
};

export default Avenzore;
