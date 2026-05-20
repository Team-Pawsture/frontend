'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Input } from '@/components/common';
import { Dropdown, GenderSelect, MedicalHistorySelect, ProfileImageUpload } from '@/components/pet';
import { BREED_LABEL } from '@/constants/pet';
import type { Breed, Gender, MedicalHistory } from '@/types/pet.types';

const BREED_OPTIONS = (Object.keys(BREED_LABEL) as Breed[]).map((key) => ({
  value: key,
  label: BREED_LABEL[key],
}));

const PetNewPage = (): React.ReactElement => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState<Breed | ''>('');
  const [breedEtc, setBreedEtc] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [weight, setWeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistory[]>([]);
  const [medicalHistoryEtc, setMedicalHistoryEtc] = useState('');

  const isFormValid =
    name.trim() !== '' &&
    breed !== '' &&
    (breed !== 'OTHER' || breedEtc.trim() !== '') &&
    birthDate.trim() !== '' &&
    gender !== null &&
    weight !== '' &&
    medicalHistory.length > 0 &&
    (!medicalHistory.includes('OTHER') || medicalHistoryEtc.trim() !== '');

  const handleRegister = () => {
    router.push('/pet/success');
  };

  return (
    <div className="flex flex-col px-5 pt-6 pb-8">
      <div className="mb-6">
        <ProfileImageUpload />
      </div>
      <div className="flex flex-col">
        <Input
          label="이름"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
        />
        <Dropdown
          label="견종"
          name="breed"
          value={breed}
          onChange={(value) => setBreed(value as Breed)}
          options={BREED_OPTIONS}
          placeholder="견종을 선택해주세요"
        />
        {breed === 'OTHER' && (
          <Input
            name="breedEtc"
            placeholder="견종을 입력해주세요"
            value={breedEtc}
            onChange={(e) => setBreedEtc(e.target.value)}
          />
        )}
        <Input
          label="생년월일"
          name="birthDate"
          placeholder="2020.01.01"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <Input
          label="몸무게 (kg)"
          name="weight"
          type="number"
          min="0"
          step="0.1"
          placeholder="예: 5.2"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <GenderSelect value={gender} onChange={setGender} />
        <MedicalHistorySelect
          value={medicalHistory}
          onChange={setMedicalHistory}
          etcValue={medicalHistoryEtc}
          onEtcChange={setMedicalHistoryEtc}
        />
      </div>
      <Button label="등록하기" onClick={handleRegister} isDisabled={!isFormValid} />
    </div>
  );
};

export default PetNewPage;
