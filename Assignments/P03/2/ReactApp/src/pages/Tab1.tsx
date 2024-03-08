import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonButton  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonList>
      <IonItem>
        <IonInput label="Default input"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Input with value" value="121 S Pinckney St #300"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Readonly input" value="Madison" readonly={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Disabled input" value="53703" disabled={true}></IonInput>
      </IonItem>

      <IonItem>
        <IonButton>Default Button</IonButton>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
