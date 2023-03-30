import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.module.css';
import { Dashboard } from './dashboard/dashboard';
import { Logo } from './logo/logo';

export function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <Logo />
                </div>
            </header>
            <div className={styles.sidebar}>                
            </div> 
            <div className={styles.main}>
                <Dashboard title='Купить прокси'>
                    <div>

                    </div>
                </Dashboard>
            </div>
        </div>
    );
}
