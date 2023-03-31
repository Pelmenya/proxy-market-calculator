import { Button } from 'react-bootstrap';
import { useTotalCost } from '../../hooks/use-total-cost/use-total-cost';
import { useAppDispatch } from '../../redux/hooks';
import { setCalculatorStep } from '../../redux/slices/calculator';
import { setTotalCost } from '../../redux/slices/total-cost';
import styles from './total-cost.module.css';

export const TotalCost = () => {
    const { totalCost } = useTotalCost();
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
                        onClick={() => {
                            if (totalCost) {
                                dispatch(setCalculatorStep(2));
                                dispatch(setTotalCost(totalCost));
                            }
                        }}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
    );
};
