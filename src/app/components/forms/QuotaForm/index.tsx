'use client';
import '@/app/styles/google-autocomplete.css';
import {
  Form,
  TextInput,
  RadioSelect,
  TextArea,
  MultiSelect,
} from '@/app/components/ui/Form';

import { AreaIcon, FloorIcon, CornerIcon } from '@/app/components/icons/Form';

import {
  BsGeo,
  BsGeoFill,
  BsPersonBoundingBox,
  BsBuildingFill,
  BsMailbox2,
  BsTelephone,
  BsCalendarDate,
  Bs123,
} from 'react-icons/bs';

import { useMemo, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useFormStatus } from 'react-dom';
import Button from '../../ui/Button';

import React from 'react';

import { useRouter } from 'next/navigation';
import TurnstileWidget from '@/app/components/Turnstile';

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button variants='primary' disabled={pending} type='submit'>
      {pending ? 'Skickar...' : children}
    </Button>
  );
}

export interface QuotaFormData {
  type: 'private' | 'company';
  fromAddress: string;
  toAddress: string;
  name: string;
  org?: string;
  date: string;
  email: string;
  tel: string;
}

interface Props {
  data?: QuotaFormData;
}

export function QuotaForm({ data }: Props) {
  const today = new Date().toISOString().split('T')[0];
  const [isCompany, setIsCompany] = useState(data?.type === 'company');
  const autoCompleteOptions = useMemo(
    () => ({
      types: ['geocode'], // 'geocode' includes both cities and streets
      fields: [
        'address_components',
        'geometry.location',
        'place_id',
        'formatted_address',
      ],
      componentRestrictions: { country: 'se' },
      language: 'sv',
    }),
    []
  );

  const { ref: fromAddressInputRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    language: 'sv',
    options: autoCompleteOptions,
  });

  const { ref: toAddressInputRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    language: 'sv',
    options: autoCompleteOptions,
  });

  return (
    <Form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      className='rounded-xl bg-primary-accent p-8 drop-shadow-xl'
      submitText='Begär kostnadsfri offert'
      pendingText='Skickar...'
      type='quota'
    >
      <RadioSelect
        onChange={(e) => {
          setIsCompany(e.target.value === 'company');
        }}
        name='type'
        options={[
          { label: 'Privatperson', value: 'private' },
          { label: 'Företag', value: 'company' },
        ]}
        defaultSelect={data?.type}
      />
      <TextInput
        name='name'
        type='text'
        icon={
          isCompany ? (
            <BsBuildingFill size={20} />
          ) : (
            <BsPersonBoundingBox size={20} />
          )
        }
        placeholder={isCompany ? 'Företagsnamn' : 'Namn'}
        required
        autoComplete='name'
        defaultValue={data?.name}
      />

      {isCompany && (
        <TextInput
          name={'org'}
          type='text'
          icon={
            isCompany ? <Bs123 size={20} /> : <BsPersonBoundingBox size={20} />
          }
          placeholder={isCompany ? 'Organisationsnummer' : 'Namn'}
          required
          defaultValue={data?.org}
        />
      )}
      <TextInput
        name='email'
        type='email'
        icon={<BsMailbox2 size={20} />}
        placeholder='E-mail'
        required
        autoComplete='email'
        defaultValue={data?.email}
      />
      <TextInput
        name='tel'
        type='tel'
        icon={<BsTelephone size={20} />}
        placeholder='Telefonnummer'
        required
        autoComplete='tel'
        defaultValue={data?.tel}
      />
      <TextInput
        name='date'
        type='date'
        icon={<BsCalendarDate size={20} />}
        placeholder='Datum'
        min={today}
        required
        defaultValue={data?.date}
      />
      <RadioSelect
        legend='Flyttar från:'
        name='from'
        options={[
          { label: 'Lägenhet', value: 'Lägenhet' },
          { label: 'Villa/radhus', value: 'Villa/radhus' },
          { label: 'Kontor', value: 'Kontor' },
          { label: 'Magasin', value: 'Magasin' },
          { label: 'Annat', value: 'Annat' },
        ]}
      />
      <TextInput
        name='fromAddress'
        type='text'
        icon={<BsGeo size={20} />}
        placeholder='Adress'
        required
        ref={fromAddressInputRef}
        defaultValue={data?.fromAddress ?? ''}
        autoComplete='off'
      />
      <div className='flex w-full flex-col sm:flex-row sm:gap-4'>
        <TextInput
          name='fromArea'
          type='number'
          icon={<AreaIcon />}
          placeholder='Bostadsarea (kvm)'
          required
        />
        <TextInput
          name='fromFloor'
          type='number'
          icon={<FloorIcon />}
          placeholder='Våningsplan'
          required
        />
      </div>
      <RadioSelect
        legend='Finns det hiss?'
        name='fromElevator'
        options={[
          { label: 'Ja', value: 'Ja' },
          { label: 'Nej', value: 'Nej' },
        ]}
      />
      <RadioSelect
        legend='Flyttar till:'
        name='to'
        options={[
          { label: 'Lägenhet', value: 'Lägenhet' },
          { label: 'Villa/radhus', value: 'Villa/radhus' },
          { label: 'Kontor', value: 'Kontor' },
          { label: 'Magasin', value: 'Magasin' },
          { label: 'Annat', value: 'Annat' },
        ]}
      />
      <TextInput
        name='toAddress'
        type='text'
        icon={<BsGeoFill size={20} />}
        placeholder='Adress'
        required
        ref={toAddressInputRef}
        defaultValue={data?.toAddress}
      />
      <div className='flex w-full flex-col sm:flex-row sm:gap-4'>
        <TextInput
          name='toArea'
          type='number'
          icon={<AreaIcon />}
          placeholder='Bostadsarea (kvm)'
          required
        />
        <TextInput
          name='toFloor'
          type='number'
          icon={<FloorIcon />}
          placeholder='Våningsplan'
          required
        />
      </div>
      <RadioSelect
        legend='Finns det hiss?'
        name='toElevator'
        options={[
          { label: 'Ja', value: 'Ja' },
          { label: 'Nej', value: 'Nej' },
        ]}
      />

      <MultiSelect
        legend='Jag vill ha hjälp med:'
        name='helpOptions'
        options={[
          { label: 'Nedpackning', value: 'Nedpackning' },
          { label: 'Uppackning', value: 'Uppackning' },
          { label: 'Flyttstädning', value: 'Flyttstädning' },
          { label: 'Magasinering', value: 'Magasinering' },
        ]}
      />
      <TextArea
        name='message'
        placeholder='Övriga önskemål eller kommentarer'
        maxLength={1000}
      />
      <TurnstileWidget />
    </Form>
  );
}

export function QuotaShortForm() {
  const today = new Date().toISOString().split('T')[0];
  const [isCompany, setIsCompany] = useState(false);
  const router = useRouter();

  const autoCompleteOptions = useMemo(
    () => ({
      types: ['geocode'], // 'geocode' includes both cities and streets
      fields: [
        'address_components',
        'geometry.location',
        'place_id',
        'formatted_address',
      ],
      componentRestrictions: { country: 'se' },
      language: 'sv',
    }),
    []
  );

  const { ref: fromAddressInputRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    language: 'sv',
    options: autoCompleteOptions,
  });

  const { ref: toAddressInputRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    language: 'sv',
    options: autoCompleteOptions,
  });

  const submitShortForm = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const query = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      query.set(key, value as string);
    }
    router.push(`/offert?${query}`);
  };

  return (
    <Form
      className='relative w-full rounded-xl bg-primary p-8
        shadow-[0_0px_20px_10px_rgba(0,0,0,0.3)] xl:w-1/2'
      label='Begär kostnadsfri offert'
      noValidate
      onSubmit={submitShortForm}
      submitText='Gå vidare'
    >
      <div className='absolute right-5 top-0 -translate-y-1/2 translate-x-1/2'>
        <CornerIcon />
      </div>
      <RadioSelect
        onChange={(e) => {
          setIsCompany(e.target.value === 'company');
        }}
        name='type'
        options={[
          { label: 'Privatperson', value: 'private' },
          { label: 'Företag', value: 'company' },
        ]}
      />
      <TextInput
        name='fromAddress'
        type='text'
        icon={<BsGeo size={20} />}
        placeholder='Från'
        ref={fromAddressInputRef}
        required
      />
      <TextInput
        name='toAddress'
        type='text'
        icon={<BsGeoFill size={20} />}
        placeholder='Till'
        ref={toAddressInputRef}
        required
      />
      {isCompany && (
        <TextInput
          name='name'
          type='text'
          icon={
            isCompany ? (
              <BsBuildingFill size={20} />
            ) : (
              <BsPersonBoundingBox size={20} />
            )
          }
          placeholder='Företagsnamn'
          required
        />
      )}
      <TextInput
        name={isCompany ? 'org' : 'name'}
        type='text'
        icon={
          isCompany ? <Bs123 size={20} /> : <BsPersonBoundingBox size={20} />
        }
        placeholder={isCompany ? 'Organisationsnummer' : 'Namn'}
        autoComplete='name'
        required
      />
      <TextInput
        name='date'
        type='date'
        icon={<BsCalendarDate size={20} />}
        placeholder='Datum'
        min={today}
        required
      />
      <TextInput
        name='email'
        type='email'
        icon={<BsMailbox2 size={20} />}
        placeholder='E-mail'
        autoComplete='email'
        required
      />
      <TextInput
        name='tel'
        type='tel'
        icon={<BsTelephone size={20} />}
        placeholder='Telefonnummer'
        autoComplete='tel'
        required
      />
    </Form>
  );
}

export function EmailForm() {
  return (
    <Form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      className='rounded-xl bg-primary-accent p-8 drop-shadow-xl'
      noValidate
      submitText='Skicka meddelande'
      pendingText='Skickar...'
      type='contact'
    >
      <TextInput
        name='name'
        type='text'
        icon={<BsPersonBoundingBox size={20} />}
        placeholder='Namn'
        autoComplete='name'
        required
      />

      <TextInput
        name='email'
        type='email'
        icon={<BsMailbox2 size={20} />}
        placeholder='E-mail'
        autoComplete='email'
        required
      />
      <TextInput
        name='tel'
        type='tel'
        icon={<BsTelephone size={20} />}
        placeholder='Telefonnummer'
        autoComplete='tel'
        required
      />
      <TextArea name='message' placeholder='Meddelande' maxLength={1000} />
      <TurnstileWidget />
    </Form>
  );
}
