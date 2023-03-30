import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { setCalculatorStep } from '../../redux/slices/calculator';
import styles from './total-cost.module.css';

export type TTotalCostProps = {
    totalCost?: number;
};

export const TotalCost = ({ totalCost }: TTotalCostProps) => {
    const dispatch = useAppDispatch();

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
                        onClick={() => dispatch(setCalculatorStep(2))}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
    );
};
