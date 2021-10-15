import styles from '../App.module.css';

const FxItem = ({ fxSymbol, fxRate, ratesBase }) => {
  return (
    <div className={styles.card}>
      <strong>
        {fxSymbol}/{ratesBase}
      </strong>
      <span className={styles.rate}>{fxRate}</span>
    </div>
  );
};

export default FxItem;
