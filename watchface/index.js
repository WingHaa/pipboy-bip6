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
import { assets } from "@zos/utils";
import { launchApp, SYSTEM_APP_SPORT } from "@zos/router";

letipBoyAnimation;
let calorie;
let heartRate;
let step;
let normalCalorieLinearScale;
let normalHeartRateLinearScale;
let normalStepLinearScale;

function makeWatchFace() {
  const img = assets("widgets");
  const transparentButton = img("Empty.png");

  createWidget(widget.IMG, {
    x: 0,
    y: 0,
    w: 390,
    h: 450,
    src: img("0000.png"),
    show_level: show_level.ONLY_NORMAL,
  });

  bipBoyAnimation = createWidget(widget.IMG_ANIM, {
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
    image_array: [
      img("0046.png"),
      img("0047.png"),
      img("0048.png"),
      img("0049.png"),
      img("0050.png"),
      img("0051.png"),
    ],
    image_length: 6,
    type: data_type.UVI,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.TEXT_IMG, {
    x: 306,
    y: 73,
    font_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
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

  createWidget(widget.IMG_LEVEL, {
    x: 274,
    y: 73,
    image_array: [
      img("0081.png"),
      img("0082.png"),
      img("0083.png"),
      img("0084.png"),
      img("0085.png"),
      img("0086.png"),
      img("0087.png"),
      img("0088.png"),
      img("0089.png"),
      img("0090.png"),
      img("0091.png"),
      img("0092.png"),
      img("0093.png"),
      img("0094.png"),
      img("0095.png"),
      img("0096.png"),
      img("0097.png"),
      img("0098.png"),
      img("0099.png"),
      img("0100.png"),
      img("0101.png"),
      img("0102.png"),
      img("0103.png"),
      img("0104.png"),
      img("0105.png"),
      img("0106.png"),
      img("0107.png"),
      img("0108.png"),
      img("0109.png"),
    ],
    image_length: 29,
    type: data_type.WEATHER_CURRENT,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.TEXT_IMG, {
    x: 299,
    y: 374,
    font_array: [
      img("0070.png"),
      img("0071.png"),
      img("0072.png"),
      img("0073.png"),
      img("0074.png"),
      img("0075.png"),
      img("0076.png"),
      img("0077.png"),
      img("0078.png"),
      img("0079.png"),
    ],
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
    font_array: [
      img("0070.png"),
      img("0071.png"),
      img("0072.png"),
      img("0073.png"),
      img("0074.png"),
      img("0075.png"),
      img("0076.png"),
      img("0077.png"),
      img("0078.png"),
      img("0079.png"),
    ],
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
    font_array: [
      img("0070.png"),
      img("0071.png"),
      img("0072.png"),
      img("0073.png"),
      img("0074.png"),
      img("0075.png"),
      img("0076.png"),
      img("0077.png"),
      img("0078.png"),
      img("0079.png"),
    ],
    padding: false,
    h_space: -3,
    align_h: align.LEFT,
    type: data_type.HEART,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.TEXT_IMG, {
    x: 6,
    y: 292,
    font_array: [
      img("0070.png"),
      img("0071.png"),
      img("0072.png"),
      img("0073.png"),
      img("0074.png"),
      img("0075.png"),
      img("0076.png"),
      img("0077.png"),
      img("0078.png"),
      img("0079.png"),
    ],
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
    font_array: [
      img("0070.png"),
      img("0071.png"),
      img("0072.png"),
      img("0073.png"),
      img("0074.png"),
      img("0075.png"),
      img("0076.png"),
      img("0077.png"),
      img("0078.png"),
      img("0079.png"),
    ],
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
    week_en: [
      img("0026.png"),
      img("0027.png"),
      img("0028.png"),
      img("0029.png"),
      img("0030.png"),
      img("0031.png"),
      img("0032.png"),
    ],
    week_tc: [
      img("0026.png"),
      img("0027.png"),
      img("0028.png"),
      img("0029.png"),
      img("0030.png"),
      img("0031.png"),
      img("0032.png"),
    ],
    week_sc: [
      img("0026.png"),
      img("0027.png"),
      img("0028.png"),
      img("0029.png"),
      img("0030.png"),
      img("0031.png"),
      img("0032.png"),
    ],
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    year_startX: 100,
    year_startY: 69,
    year_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_zero: 1,
    year_space: -4,
    year_align: align.LEFT,
    year_is_character: false,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    day_startX: 36,
    day_startY: 69,
    day_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_zero: 1,
    day_space: -3,
    day_align: align.LEFT,
    day_is_character: false,
    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    month_startX: 69,
    month_startY: 69,
    month_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    month_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    month_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
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
    hour_array: [
      img("0001.png"),
      img("0002.png"),
      img("0003.png"),
      img("0004.png"),
      img("0005.png"),
      img("0006.png"),
      img("0007.png"),
      img("0008.png"),
      img("0009.png"),
      img("0010.png"),
    ],
    hour_zero: 1,
    hour_space: 0,
    hour_align: align.LEFT,

    minute_startX: 282,
    minute_startY: 221,
    minute_array: [
      img("0001.png"),
      img("0002.png"),
      img("0003.png"),
      img("0004.png"),
      img("0005.png"),
      img("0006.png"),
      img("0007.png"),
      img("0008.png"),
      img("0009.png"),
      img("0010.png"),
    ],
    minute_zero: 1,
    minute_space: 0,
    minute_follow: 0,
    minute_align: align.LEFT,

    show_level: show_level.ONLY_NORMAL,
  });

  createWidget(widget.IMG_DATE, {
    year_startX: 199,
    year_startY: 92,
    year_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    year_zero: 1,
    year_space: -4,
    year_align: align.LEFT,
    year_is_character: false,
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_DATE, {
    day_startX: 138,
    day_startY: 92,
    day_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    day_zero: 1,
    day_space: -3,
    day_align: align.LEFT,
    day_is_character: false,
    show_level: show_level.ONAL_AOD,
  });

  createWidget(widget.IMG_DATE, {
    month_startX: 170,
    month_startY: 92,
    month_sc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    month_tc_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
    month_en_array: [
      img("0011.png"),
      img("0012.png"),
      img("0013.png"),
      img("0014.png"),
      img("0015.png"),
      img("0016.png"),
      img("0017.png"),
      img("0018.png"),
      img("0019.png"),
      img("0020.png"),
    ],
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
    hour_array: [
      img("0001.png"),
      img("0002.png"),
      img("0003.png"),
      img("0004.png"),
      img("0005.png"),
      img("0006.png"),
      img("0007.png"),
      img("0008.png"),
      img("0009.png"),
      img("0010.png"),
    ],
    hour_zero: 1,
    hour_space: 0,
    hour_align: align.LEFT,

    minute_startX: 143,
    minute_startY: 226,
    minute_array: [
      img("0001.png"),
      img("0002.png"),
      img("0003.png"),
      img("0004.png"),
      img("0005.png"),
      img("0006.png"),
      img("0007.png"),
      img("0008.png"),
      img("0009.png"),
      img("0010.png"),
    ],
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
      bipBoyAnimation.setProperty(prop.ANIM_STATUS, anim_status.START);
    },
    pause_call: function () {
      bipBoyAnimation.setProperty(prop.ANIM_STATUS, anim_status.STOP);
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
