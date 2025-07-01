import {
  align,
  anim_status,
  createWidget,
  data_type,
  prop,
  show_level,
  system_status,
  widget,
} from "@zos/ui";
import { getScene, SCENE_AOD } from "@zos/app";
import { Calorie, HeartRate, Step } from "@zos/sensor";
import { launchApp, SYSTEM_APP_SPORT } from "@zos/router";
import {
  bar,
  hourNumbers,
  img,
  numbers,
  smallNumbers,
  transparentButton,
  weathers,
  weekdays,
} from "./asset.js";

let pipBoyAnimation;
let calorie;
let heartRate;
let step;
let normalCalorieLinearScale;
let normalHeartRateLinearScale;
let normalStepLinearScale;

createWidget(widget.TEXT_IMG, {
  x: 306,
  y: 73,
  font_array: numbers,
  padding: false,
  h_space: 0,
  unit_sc: img("0023.png"),
  unit_tc: img("0023.png"),
  unit_en: img("0023.png"),
  negative_image: img("0021.png"),
  align_h: align.LEFT,
  type: data_type.WEATHER_CURRENT,
  show_level: show_level.ONLY_NORMAL,
});

function makeWatchFace() {
  createWidget(widget.IMG, {
    x: 0,
    y: 0,
    w: 390,
    h: 450,
    src: img("0000.png"),
    show_level: show_level.ONLY_NORMAL,
  });

  pipBoyAnimation = createWidget(widget.IMG_ANIM, {
    x: 157,
    y: 146,
    anim_path: "animation",
    anim_ext: "png",
    anim_prefix: "anim",
    anim_fps: 10,
    anim_size: 8,
    repeat_count: 0,
    anim_repeat: true,
    anim_status: anim_status.START,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_LEVEL, {
    x: 170,
    y: 126,
    image_array: bar,
    image_length: 6,
    type: data_type.UVI,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_LEVEL, {
    x: 274,
    y: 73,
    image_array: weathers,
    image_length: 29,
    type: data_type.WEATHER_CURRENT,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.TEXT_IMG, {
    x: 299,
    y: 374,
    font_array: smallNumbers,
    padding: false,
    h_space: -3,
    align_h: align.LEFT,
    type: data_type.BATTERY,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG, {
    x: 279,
    y: 375,
    src: img("0035.png"),
    show_level: show_level.ONLY_NORMAL,
  });

  let screenType = getScene();
  if (screenType != SCENE_AOD) {
    normalCalorieLinearScale = createWidget(widget.FILL_RECT);
  }

  calorie = new Calorie();
  calorie.onChange(scale);

  createWidget(widget.TEXT_IMG, {
    x: 7,
    y: 168,
    font_array: smallNumbers,
    padding: false,
    h_space: -3,
    align_h: align.LEFT,
    type: data_type.CAL,
    show_level: show_level.ONLY_NORMAL,
  });

  if (screenType != SCENE_AOD) {
    normalHeartRateLinearScale = createWidget(widget.FILL_RECT);
  }

  heartRate = new HeartRate();
  heartRate.onLastChange(scale);

  createWidget(widget.TEXT_IMG, {
    x: 7,
    y: 228,
    font_array: smallNumbers,
    padding: false,
    h_space: -3,
    align_h: align.LEFT,
    type: data_type.HEART,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.TEXT_IMG, {
    x: 6,
    y: 292,
    font_array: smallNumbers,
    padding: false,
    h_space: -3,
    unit_sc: img("0033.png"),
    unit_tc: img("0033.png"),
    unit_en: img("0033.png"),
    dot_image: img("0034.png"),
    align_h: align.LEFT,
    type: data_type.DISTANCE,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG, {
    x: 62,
    y: 305,
    src: img("0046.png"),
    show_level: show_level.ONLY_NORMAL,
  });

  if (screenType != SCENE_AOD) {
    normalStepLinearScale = createWidget(widget.FILL_RECT);
  }

  step = new Step();
  step.onChange(scale);

  createWidget(widget.TEXT_IMG, {
    x: 179,
    y: 380,
    font_array: smallNumbers,
    padding: false,
    h_space: -3,
    align_h: align.LEFT,
    type: data_type.STEP,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_STATUS, {
    x: 351,
    y: 323,
    src: img("0055.png"),
    type: system_status.LOCK,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_STATUS, {
    x: 276,
    y: 323,
    src: img("0054.png"),
    type: system_status.DISTURB,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_STATUS, {
    x: 371,
    y: 323,
    src: img("0067.png"),
    type: system_status.DISCONNECT,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_STATUS, {
    x: 299,
    y: 323,
    src: img("0052.png"),
    type: system_status.CLOCK,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_WEEK, {
    x: -7,
    y: 104,
    week_en: weekdays,
    week_tc: weekdays,
    week_sc: weekdays,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    year_startX: 100,
    year_startY: 69,
    year_sc_array: numbers,
    year_tc_array: numbers,
    year_en_array: numbers,
    year_zero: 1,
    year_space: -4,
    year_align: align.LEFT,
    year_is_character: false,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    day_startX: 36,
    day_startY: 69,
    day_sc_array: numbers,
    day_tc_array: numbers,
    day_en_array: numbers,
    day_zero: 1,
    day_space: -3,
    day_align: align.LEFT,
    day_is_character: false,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    month_startX: 69,
    month_startY: 69,
    month_sc_array: numbers,
    month_tc_array: numbers,
    month_en_array: numbers,
    month_zero: 1,
    month_space: -5,
    month_align: align.LEFT,
    month_is_character: false,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_TIME, {
    am_x: 313,
    am_y: 305,
    am_sc_path: img("0024.png"),
    am_en_path: img("0024.png"),
    pm_x: 313,
    pm_y: 305,
    pm_sc_path: img("0025.png"),
    pm_en_path: img("0025.png"),
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_TIME, {
    hour_startX: 282,
    hour_startY: 125,
    hour_array: hourNumbers,
    hour_zero: 1,
    hour_space: 0,
    hour_align: align.LEFT,

    minute_startX: 282,
    minute_startY: 221,
    minute_array: hourNumbers,
    minute_zero: 1,
    minute_space: 0,
    minute_follow: 0,
    minute_align: align.LEFT,

    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    year_startX: 199,
    year_startY: 92,
    year_sc_array: numbers,
    year_tc_array: numbers,
    year_en_array: numbers,
    year_zero: 1,
    year_space: -4,
    year_align: align.LEFT,
    year_is_character: false,
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_DATE, {
    day_startX: 138,
    day_startY: 92,
    day_sc_array: numbers,
    day_tc_array: numbers,
    day_en_array: numbers,
    day_zero: 1,
    day_space: -3,
    day_align: align.LEFT,
    day_is_character: false,
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_DATE, {
    month_startX: 170,
    month_startY: 92,
    month_sc_array: numbers,
    month_tc_array: numbers,
    month_en_array: numbers,
    month_zero: 1,
    month_space: -5,
    month_align: align.LEFT,
    month_is_character: false,
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_TIME, {
    am_x: 175,
    am_y: 316,
    am_sc_path: img("0024.png"),
    am_en_path: img("0024.png"),
    pm_x: 175,
    pm_y: 316,
    pm_sc_path: img("0025.png"),
    pm_en_path: img("0025.png"),
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_TIME, {
    hour_startX: 143,
    hour_startY: 128,
    hour_array: hourNumbers,
    hour_zero: 1,
    hour_space: 0,
    hour_align: align.LEFT,

    minute_startX: 143,
    minute_startY: 226,
    minute_array: hourNumbers,
    minute_zero: 1,
    minute_space: 0,
    minute_follow: 0,
    minute_align: align.LEFT,

    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG, {
    x: 0,
    y: 0,
    src: img("IMG_0708.png"),
    show_level: show_level.ONAL_AOD,
  });

  function scale() {
    const progress_ls_normal_calorie = Math.min(
      calorie.getCurrent() / calorie.getTarget(),
      1,
    );

    if (screenType != SCENE_AOD) {
      // normal_calorie_linear_scale
      // initial parameters
      let start_x_normal_calorie = 67;
      let start_y_normal_calorie = 182;
      let lenght_ls_normal_calorie = 51;
      let line_width_ls_normal_calorie = 6;
      let color_ls_normal_calorie = 0xff00fe86;

      // calculated parameters
      let start_x_normal_calorie_draw = start_x_normal_calorie;
      let start_y_normal_calorie_draw = start_y_normal_calorie;
      lenght_ls_normal_calorie =
        lenght_ls_normal_calorie * progress_ls_normal_calorie;
      let lenght_ls_normal_calorie_draw = lenght_ls_normal_calorie;
      let line_width_ls_normal_calorie_draw = line_width_ls_normal_calorie;
      if (lenght_ls_normal_calorie < 0) {
        lenght_ls_normal_calorie_draw = -lenght_ls_normal_calorie;
        start_x_normal_calorie_draw =
          start_x_normal_calorie - lenght_ls_normal_calorie_draw;
      }

      normalCalorieLinearScale.setProperty(prop.MORE, {
        x: start_x_normal_calorie_draw,
        y: start_y_normal_calorie_draw,
        w: lenght_ls_normal_calorie_draw,
        h: line_width_ls_normal_calorie_draw,
        color: color_ls_normal_calorie,
      });
    }

    let targetHeartRate = 179;
    let progressHeartRate = (heartRate.getLast() - 71) / (targetHeartRate - 71);
    progressHeartRate = Math.max(0, Math.min(1, progressHeartRate));
    let progress_ls_normal_heart_rate = progressHeartRate;

    if (screenType != SCENE_AOD) {
      // normal_heart_rate_linear_scale
      // initial parameters
      let start_x_normal_heart_rate = 67;
      let start_y_normal_heart_rate = 240;
      let lenght_ls_normal_heart_rate = 47;
      let line_width_ls_normal_heart_rate = 8;
      let color_ls_normal_heart_rate = 0xff63da81;

      // calculated parameters
      let start_x_normal_heart_rate_draw = start_x_normal_heart_rate;
      let start_y_normal_heart_rate_draw = start_y_normal_heart_rate;
      lenght_ls_normal_heart_rate =
        lenght_ls_normal_heart_rate * progress_ls_normal_heart_rate;
      let lenght_ls_normal_heart_rate_draw = lenght_ls_normal_heart_rate;
      let line_width_ls_normal_heart_rate_draw =
        line_width_ls_normal_heart_rate;
      if (lenght_ls_normal_heart_rate < 0) {
        lenght_ls_normal_heart_rate_draw = -lenght_ls_normal_heart_rate;
        start_x_normal_heart_rate_draw =
          start_x_normal_heart_rate - lenght_ls_normal_heart_rate_draw;
      }

      normalHeartRateLinearScale.setProperty(prop.MORE, {
        x: start_x_normal_heart_rate_draw,
        y: start_y_normal_heart_rate_draw,
        w: lenght_ls_normal_heart_rate_draw,
        h: line_width_ls_normal_heart_rate_draw,
        color: color_ls_normal_heart_rate,
      });
    }

    const progress_ls_normal_step = Math.min(
      step.getCurrent() / step.getTarget(),
      1,
    );

    if (screenType != SCENE_AOD) {
      // normal_step_linear_scale
      // initial parameters
      let start_x_normal_step = 176;
      let start_y_normal_step = 369;
      let lenght_ls_normal_step = 69;
      let line_width_ls_normal_step = 7;
      let color_ls_normal_step = 0xff24db64;

      // calculated parameters
      let start_x_normal_step_draw = start_x_normal_step;
      let start_y_normal_step_draw = start_y_normal_step;
      lenght_ls_normal_step = lenght_ls_normal_step * progress_ls_normal_step;
      let lenght_ls_normal_step_draw = lenght_ls_normal_step;
      let line_width_ls_normal_step_draw = line_width_ls_normal_step;
      if (lenght_ls_normal_step < 0) {
        lenght_ls_normal_step_draw = -lenght_ls_normal_step;
        start_x_normal_step_draw =
          start_x_normal_step - lenght_ls_normal_step_draw;
      }

      normalStepLinearScale.setProperty(prop.MORE, {
        x: start_x_normal_step_draw,
        y: start_y_normal_step_draw,
        w: lenght_ls_normal_step_draw,
        h: line_width_ls_normal_step_draw,
        color: color_ls_normal_step,
      });
    }
  }

  createWidget(widget.WIDGET_DELEGATE, {
    resume_call: function () {
      scale();
      pipBoyAnimation.setProperty(prop.ANIM_STATUS, anim_status.START);
    },
    pause_call: function () {
      pipBoyAnimation.setProperty(prop.ANIM_STATUS, anim_status.STOP);
    },
  });

  createWidget(widget.BUTTON, {
    x: 0,
    y: 325,
    w: 150,
    h: 100,
    press_src: transparentButton,
    normal_src: transparentButton,
    click_func: () => {
      launchApp({
        appId: SYSTEM_APP_SPORT,
        native: true,
      });
    },
  });
}

WatchFace({
  onInit() {},

  build() {
    makeWatchFace();
  },

  onDestroy() {
    calorie.offChange();
    heartRate.offLastChange();
    step.offChange();
  },
});
