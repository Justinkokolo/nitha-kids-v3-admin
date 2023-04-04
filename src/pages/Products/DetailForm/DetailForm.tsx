// Libs
import { h } from 'preact';
import { useEffect, useState } from "react";

// Utils
import { Spacing } from "../../../shared/constants/spacing";
// import { FontSize, FontWeight } from "../../../shared/constants/fonts";
import { Color } from "../../../shared/constants/colors";
import { Type } from "../../../shared/constants/size";
import { useAppSelector, useAppDispatch } from "../../../shared/redux/hooks";
import { addProductDetail, editProductDetail } from "../../../shared/redux/features/detail/calls";

// Components
import Space from "../../../shared/components/Space/Space";
import Button from "../../../shared/components/Button";
import Panel from "../../../shared/components/Panel";
import {
  ColumnsWrapper,
  Column,
  ColumnsSeparator,
  FlewRowColumn
} from "../../../styles/common.styles";
import TextField from "../../../shared/components/TextField";
import SelectField from "../../../shared/components/SelectField";
import Alert from "../../../shared/components/Alert";
import { IDetail } from '../../../types/index';

const seasons = [
  { value: 'Chaude', text: 'Chaude' },
  { value: 'Froide', text: 'Froide' },
  { value: 'Toutes', text: 'Toutes' }
];

const cols = [
  { value: 'Col maho', text: 'Col maho' },
  { value: 'Col V', text: 'Col V' },
  { value: 'Col claudine', text: 'Col claudine' },
  { value: 'N/A', text: 'N/A' }
];

const manches = [
  { value: 'Manches courtes', text: 'Manches courtes' },
  { value: 'Trois quart', text: 'Trois quart' },
  { value: 'Manches longues', text: 'Manches longues' },
  { value: 'N/A', text: 'N/A' }
];

const tissues = [
  { value: 'Polyester', text: 'Polyester' },
  { value: 'Coton', text: 'Coton' },
  { value: 'Nilon', text: 'Nilon' },
  { value: 'Lin', text: 'Lin' }
];

const transparents = [
  { value: 'Non', text: 'Non' },
  { value: 'Oui', text: 'Oui' }
];

const initialForm = {
  ['couleur']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['motif']: {
    value: '',
    errorMessage: '',
    required: false
  },
  ['saison']: {
    value: {
      value: ''
    },
    errorMessage: '',
    required: true
  },
  ['description']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['type_de_col']: {
    value: {
      value: ''
    },
    errorMessage: '',
    required: true
  },
  ['type_des_manches']: {
    value: {
      value: ''
    },
    errorMessage: '',
    required: true
  },
  ['tissu']: {
    value: {
      value: ''
    },
    errorMessage: '',
    required: true
  },
  ['transparent']: {
    value: {
      value: ''
    },
    errorMessage: '',
    required: true
  },
  ['composition']: {
    value: '',
    errorMessage: '',
    required: true
  },
  ['instructions']: {
    value: '',
    errorMessage: '',
    required: false
  },
};

interface IProps {
  data?: IDetail,
  products_id: number | undefined,
}

const DetailForm = ({ data, products_id }: IProps) => {
  const [form, setForm] = useState(initialForm);
  const [selectedSeason, setSelectedSeason] = useState<{ value: string; text: string} | undefined>(undefined);
  const [typeDeCol, setTypeDeCol] = useState<{ value: string; text: string} | undefined>(undefined);
  const [typeDeManches, setTypeDeManches] = useState<{ value: string; text: string} | undefined>(undefined);
  const [tissu, setTissu] = useState<{ value: string; text: string} | undefined>(undefined);
  const [transparent, setTransparent] = useState<{ value: string; text: string} | undefined>(undefined);
  const { detail } = useAppSelector((state) => state.detail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const newForm = {
        ['couleur']: {
          value: data.couleur,
          errorMessage: '',
          required: true
        },
        ['motif']: {
          value: data.motif || '',
          errorMessage: '',
          required: true
        },
        ['saison']: {
          value: {
            value: data.saison
          },
          errorMessage: '',
          required: true
        },
        ['description']: {
          value: data.description,
          errorMessage: '',
          required: true
        },
        ['type_de_col']: {
          value: {
            value: data.type_de_col || ''
          },
          errorMessage: '',
          required: true
        },
        ['type_des_manches']: {
          value: {
            value: data.type_des_manches || ''
          },
          errorMessage: '',
          required: true
        },
        ['tissu']: {
          value: {
            value: data.tissu || ''
          },
          errorMessage: '',
          required: true
        },
        ['transparent']: {
          value: {
            value: data.transparent
          },
          errorMessage: '',
          required: true
        },
        ['composition']: {
          value: data.composition,
          errorMessage: '',
          required: true
        },
        ['instructions']: {
          value: data.instructions || '',
          errorMessage: '',
          required: false
        },
      };
      setSelectedSeason(seasons.find(s => s.value === data.saison));
      setTypeDeCol(cols.find(s => s.value === data.type_de_col));
      setTypeDeManches(manches.find(s => s.value === data.type_des_manches));
      setTissu(tissues.find(s => s.value === data.tissu));
      setTransparent(transparents.find(s => s.value === data.transparent));
      // @ts-ignore
      setForm(newForm);
    }
  }, [data]);

  const handleChange = (target: string, value: number | string | null) => {
    let newForm = form;
    newForm = {
      ...form,
      [target]: {
        value: value,
        errorMessage: value ? '' : 'Ce champ est obligatoire',
      }
    };
    setForm(newForm);
  };

  const onSave = () => {
    let allGood = true;
    Object.values(form).filter((item, index) => {
      const { value, required } = item;
      if (!value && required) {
        handleChange(Object.keys(form)[index], value);
        allGood = false;
        return;
      }
    });

    let payload: any = {
      couleur: form['couleur'].value,
      motif: form['motif'].value,
      saison: form['saison'].value?.value,
      description: form['description'].value,
      type_de_col: form['type_de_col'].value?.value,
      type_des_manches: form['type_des_manches'].value?.value,
      transparent: form['transparent'].value?.value,
      tissu: form['tissu'].value?.value,
      composition: form['composition'].value,
      instructions: form['instructions'].value,
      products_id: products_id,
    };

    if (allGood) {
      if (data) {
        payload.id = data.id;
        // @ts-ignore
        dispatch(editProductDetail(payload));
      } else {
        // @ts-ignore
        dispatch(addProductDetail(payload));
      }
    }
    
  };

  const { type, message } = detail.alert;
  const isSubmitting = detail.status === 'loading';

  return (
    <div>
      <Alert type={type} text={message} show={!!message} />
        <Panel size={Type.Large}>
          <div style={{
            width: '100%'
          }}>
            <FlewRowColumn>
              <ColumnsWrapper>
                <Column flex={1.6}>
                  <ColumnsWrapper>
                    <TextField
                      label="Couleur"
                      id="couleur"
                      onChange={(text) => handleChange('couleur', text)}
                      errorMessage={form['couleur'].errorMessage}
                      value={form['couleur'].value}
                    />
                  </ColumnsWrapper>
                  <Space size={Spacing.Medium} />
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <TextField
                        label="Motif"
                        id="motif"
                        onChange={(text) => handleChange('motif', text)}
                        errorMessage={form['motif'].errorMessage}
                        value={form['motif'].value}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <SelectField
                        id="season"
                        label="Saison"
                        // @ts-ignore
                        onChange={(item) => handleChange('saison', item)}
                        // @ts-ignore
                        list={seasons}
                        // @ts-ignore
                        value={selectedSeason}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
              </ColumnsWrapper>
            </FlewRowColumn>
            <FlewRowColumn>
              <ColumnsWrapper>
                <Column flex={1.8}>
                  <ColumnsWrapper>
                    <TextField
                      label="Description"
                      id="description"
                      onChange={(text) => handleChange('description', text)}
                      errorMessage={form['description'].errorMessage}
                      value={form['description'].value}
                    />
                  </ColumnsWrapper>
                  <Space size={Spacing.Medium} />
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <SelectField
                        id="type_de_col"
                        label="Type de col"
                        // @ts-ignore
                        onChange={(item) => handleChange('type_de_col', item)}
                        // @ts-ignore
                        list={cols}
                        value={typeDeCol}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <SelectField
                        id="type_des_manches"
                        label="Type des manches"
                        // @ts-ignore
                        onChange={(item) => handleChange('type_des_manches', item)}
                        // @ts-ignore
                        list={manches}
                        value={typeDeManches}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
              </ColumnsWrapper>
            </FlewRowColumn>
            <FlewRowColumn>
              <ColumnsWrapper>
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <SelectField
                        id="tissu"
                        label="Tissu"
                        // @ts-ignore
                        onChange={(item) => handleChange('tissu', item)}
                        // @ts-ignore
                        list={tissues}
                        value={tissu}
                      />
                    </Column>
                  </ColumnsWrapper>
                  <Space size={Spacing.Medium} />
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1.6}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <TextField
                        label="Composition"
                        id="composition"
                        onChange={(text) => handleChange('composition', text)}
                        errorMessage={form['composition'].errorMessage}
                        value={form['composition'].value}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
                <ColumnsSeparator size={Spacing.Large} />
                <Column flex={1}>
                  <ColumnsWrapper>
                    <Column flex={1}>
                      <SelectField
                        id="transparent"
                        label="Transparent"
                        // @ts-ignore
                        onChange={(item) => handleChange('transparent', item)}
                        // @ts-ignore
                        list={transparents}
                        value={transparent}
                      />
                    </Column>
                  </ColumnsWrapper>
                </Column>
              </ColumnsWrapper>
            </FlewRowColumn>
            <FlewRowColumn>
              <ColumnsWrapper>
                <Column flex={1}>
                  <TextField
                    label="Instructions"
                    id="instructions"
                    onChange={(text) => handleChange('instructions', text)}
                    errorMessage={form['instructions'].errorMessage}
                    value={form['instructions'].value}
                  />
                </Column>
              </ColumnsWrapper>
            </FlewRowColumn>
            <Space size={Spacing.Medium} />
            <Button
              text="Save details"
              onClick={() => onSave()}
              color={Color.white}
              backgroundColor={Color.blue}
              size={Type.Large}
              loading={isSubmitting}
            />
          </div>
        </Panel>
    </div>
  );
};

export default DetailForm;
