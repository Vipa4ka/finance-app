// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expensesSelectors } from '../../Redux/expenses';
import styles from './Expenses.module.css';

const Expenses = () => {

  const expenses = useSelector(expensesSelectors.getExpenses);
  const total = useSelector(expensesSelectors.getTotal);
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(expensesOperations.fetchExpenses()), [dispatch]);

  return (
    <>
      <div className={styles.balance}>
        Ваш баланс
        <p className={styles.total}>
          <span className={styles.currency}>₴</span> {total.toFixed(2)}</p>
      </div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.headRow}>
            <td className={styles.item}>Дата</td>
            <td className={styles.center}>Тип</td>
            <td className={styles.item}>Категория</td>
            <td className={styles.item}>Комментарий</td>
            <td className={styles.center}>Сумма</td>
            <td className={styles.center}>Баланс</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, date, type, category, description, sum }) =>
          (
            <tr key={id} className={styles.row}>
              <td className={styles.item}>{date}</td>
              <td className={styles.center}>{type}</td>
              <td className={styles.item}>{category}</td>
              <td className={styles.item}>{description}</td>
              <td className={type === '-' ? styles.dec : styles.inc}>{sum}</td>
              <td className={styles.center}>{type === '-' ? total - sum : total + sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};

export default Expenses;
