// Angular imports
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Form Components
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';

// Interfaces
import { AppQuestionnaireTypings as WidgetTypings } from '../model/app-questionnaire.interfaces';
import { FIELD_TYPE } from "../model/app-questionnaire.constants";

const components: { [type: string]: Type<WidgetTypings.IField> } = {
  // [FIELD_TYPE.AMOUNT]: AmountComponent,
  // [FIELD_TYPE.CHECKBOX]: CheckboxComponent,
  // [FIELD_TYPE.DATE]: DateComponent,
  // [FIELD_TYPE.FREE_TEXT]: FreeTextComponent,
  // [FIELD_TYPE.PERCENTAGE]: PercentageComponent,
  [FIELD_TYPE.RADIOBUTTON]: RadiobuttonComponent,
  [FIELD_TYPE.RADIOBUTTON_WITH_ICON]: RadiobuttonComponent,
  // [FIELD_TYPE.SELECT]: SelectComponent,
  // [FIELD_TYPE.TEXT]: TextComponent
};

@Directive({
  selector: '[app-dynamic-field]'
})
export class AppDynamicFieldDirective implements WidgetTypings.IField, OnInit {
  @Input() config: WidgetTypings.IQuestion;
  @Input() group: FormGroup;
  @Input() currency?: string;

  component: ComponentRef<WidgetTypings.IField>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }

    this.viewContainer.clear();
    const component = this.resolver.resolveComponentFactory<WidgetTypings.IField>(components[this.config.type]);
    this.component = this.viewContainer.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.currency = this.currency;
  }
}
