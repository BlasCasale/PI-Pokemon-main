// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getTypes } from '../../redux/actions';
import style from './options.module.css';


export default function Options({ filterOwn, filterCloud, orderByName, orderByNameBack, orderByAttack, orderByAttackBack, filterBoth, filterByType }) {

    const pokeTypes = useSelector((state) => state.types);

    return (
        <div className={style.higher}>
            <div className={style.order}>
                <button className={style.btn__order} onClick={orderByName}>Abc..</button>
                <button className={style.btn__order} onClick={orderByNameBack}>Zyx..</button>
                <button className={style.btn__order} onClick={orderByAttack}>Attack upwards</button>
                <button className={style.btn__order} onClick={orderByAttackBack}>Attack downwards</button>
            </div>
            <select onChange={filterByType} className={style.select}>
                <option selected disabled>Select Types</option>
                <option value="all">All</option>
                {pokeTypes?.map((type) => {
                    return (
                        <option key={type.name} value={type.name}>
                            {type.name}
                        </option>
                    );
                })}
            </select>
            <div className={style.filter}>
                <button className={style.btn__order} onClick={filterBoth}>All</button>
                <button className={style.btn__order} onClick={filterCloud}>Cloud pokemons</button>
                <button className={style.btn__order} onClick={filterOwn}>Own pokemons</button>
            </div>
        </div>
    );
}