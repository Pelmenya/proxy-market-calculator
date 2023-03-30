import { Button } from 'react-bootstrap';
import styles from './total-cost.module.css';

export type TTotalCostProps = {
    totalCost?: number;
};

export const TotalCost = ({ totalCost }: TTotalCostProps) => {
    return (
        <div className="container p-0 mt-3">
            <div className="row">
                {totalCost ? (
                    <>
                        <div className="col">
                            <p className={styles.total__text}>
                                Сумма к оплате:
                            </p>
                        </div>
                        <div className="col text-end">
                            <p className={styles.total__text}>
                                от {totalCost} руб
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col"></div>
                        <div className="col"></div>
                    </>
                )}
                <div className="col">
                    <Button
                        variant="primary"
                        size="lg"
                        className={styles.total__button}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
    );
};
