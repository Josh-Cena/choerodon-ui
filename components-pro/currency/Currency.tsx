import { observer } from 'mobx-react';
import { FormatNumberFuncOptions, NumberField, NumberFieldProps } from '../number-field/NumberField';
import { FieldType } from '../data-set/enum';
import formatCurrency from '../formatter/formatCurrency';
import { getCurrencyFormatOptions, getCurrencyFormatter } from '../field/utils';

export interface CurrencyProps<V = number> extends NumberFieldProps<V> {
  currency?: string;
}

@observer
export default class Currency extends NumberField<CurrencyProps> {
  static displayName = 'Currency';

  static format = formatCurrency;

  getFieldType(): FieldType {
    return FieldType.currency;
  }

  getFormatter() {
    return this.getProp('formatter') || getCurrencyFormatter();
  }

  getFormatOptions(): FormatNumberFuncOptions {
    return getCurrencyFormatOptions((name) => this.getProp(name), this.lang);
  }
}
