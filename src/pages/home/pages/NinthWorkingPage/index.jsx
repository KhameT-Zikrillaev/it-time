import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';
import { teamMembers } from './services/teamData';
import Loopslider from '../../../../components/loopslider';

export default function NinthWorkingPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="working-team">
        <h2 className="team-title">{t('home.NinthWorkingPage.teamTitle')}</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => {
            const teamKey = index === 0 ? 'frontend' : index === 1 ? 'backend' : 'smm';
            return (
              <div key={index} className="team-card">
                <span className="card-icon">{member.icon}</span>
                <img 
                  src={member.image} 
                  alt={t(`home.NinthWorkingPage.teams.${teamKey}.title`)} 
                  className="card-image"
                />
                <h3 className="card-title">
                  {t(`home.NinthWorkingPage.teams.${teamKey}.title`)}
                </h3>
                <p className="card-description">
                  {t(`home.NinthWorkingPage.teams.${teamKey}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hamkor-team py-4">
        <h2 className="team-title">{t('home.NinthWorkingPage.partnersTitle')}</h2>
        <Loopslider />
      </div>
    </>
  );
}
