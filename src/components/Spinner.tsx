import styles from '@/styles/Spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles["spinner-container"]}>
            <div className={styles["loading-spinner"]}></div>
        </div>
    );
};

export default Spinner;

