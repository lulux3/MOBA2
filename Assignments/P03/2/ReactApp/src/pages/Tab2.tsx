import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react'; // Import useState

const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // Create state variable

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />

        <IonButton onClick={() => setShowModal(true)}>Open modal</IonButton> 

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}> 
          <IonHeader>
            <IonToolbar>
              <IonTitle>My Modal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p>This is modal content</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;