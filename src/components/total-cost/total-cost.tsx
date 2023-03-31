import { Button } from 'react-bootstrap';
import { useTotalCost } from '../../hooks/use-total-cost/use-total-cost';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCalculatorState } from '../../redux/selectors/calculator';
import { setCalculatorStep } from '../../redux/slices/calculator';
import { setInitProxysState } from '../../redux/slices/proxys';
import { setTotalCost } from '../../redux/slices/total-cost';
import cn from 'classnames';
import styles from './total-cost.module.css';

export const TotalCost = () => {
    const { totalCost } = useTotalCost();
    const { step } = useAppSelector(getCalculatorState);
    const dispatch = useAppDispatch();

    const handlerOnClickConfirmOrder = () => {
        if (totalCost) {
            if (step === 1) {
                dispatch(setCalculatorStep(2));
                dispatch(setTotalCost(totalCost));
            }
            if (step === 2) {
                dispatch(setCalculatorStep(3));
                dispatch(setTotalCost(totalCost));
            }
            if (step === 3) {
                dispatch(setCalculatorStep(1));
                dispatch(setTotalCost(0));
                dispatch(setInitProxysState());
            }
        }
    };

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
                        variant={step === 3 ? 'outline-danger' : 'primary'}
                        size="lg"
                        className={cn(
                            styles.total__button,
                            step === 3 && styles.total__button_back,
                        )}
                        onClick={handlerOnClickConfirmOrder}
                    >
                        {step === 3 ? 'Начать заново' : 'Оформить заказ'}
                    </Button>
                </div>
            </div>
        </div>
    );
};
