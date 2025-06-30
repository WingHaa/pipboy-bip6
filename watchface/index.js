WatchFace({
  init_view() {
    //dynamic modify start

    normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 390,
      h: 450,
      src: "0000.png",
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_frame_animation_1 = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
      x: 157,
      y: 146,
      anim_path: "animation",
      anim_ext: "png",
      anim_prefix: "anim",
      anim_fps: 10,
      anim_size: 8,
      repeat_count: 0,
      anim_repeat: true,
      anim_status: hmUI.anim_status.START,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_uvi_image_progress_img_level = hmUI.createWidget(
      hmUI.widget.IMG_LEVEL,
      {
        x: 170,
        y: 126,
        image_array: [
          "0046.png",
          "0047.png",
          "0048.png",
          "0049.png",
          "0050.png",
          "0051.png",
        ],
        image_length: 6,
        type: hmUI.data_type.UVI,
        show_level: hmUI.show_level.ONLY_NORMAL,
      },
    );

    normal_temperature_current_text_img = hmUI.createWidget(
      hmUI.widget.TEXT_IMG,
      {
        x: 306,
        y: 73,
        font_array: [
          "0011.png",
          "0012.png",
          "0013.png",
          "0014.png",
          "0015.png",
          "0016.png",
          "0017.png",
          "0018.png",
          "0019.png",
          "0020.png",
        ],
        padding: false,
        h_space: 0,
        unit_sc: "0023.png",
        unit_tc: "0023.png",
        unit_en: "0023.png",
        negative_image: "0021.png",
        align_h: hmUI.align.LEFT,
        type: hmUI.data_type.WEATHER_CURRENT,
        show_level: hmUI.show_level.ONLY_NORMAL,
      },
    );

    normal_weather_image_progress_img_level = hmUI.createWidget(
      hmUI.widget.IMG_LEVEL,
      {
        x: 274,
        y: 73,
        image_array: [
          "0081.png",
          "0082.png",
          "0083.png",
          "0084.png",
          "0085.png",
          "0086.png",
          "0087.png",
          "0088.png",
          "0089.png",
          "0090.png",
          "0091.png",
          "0092.png",
          "0093.png",
          "0094.png",
          "0095.png",
          "0096.png",
          "0097.png",
          "0098.png",
          "0099.png",
          "0100.png",
          "0101.png",
          "0102.png",
          "0103.png",
          "0104.png",
          "0105.png",
          "0106.png",
          "0107.png",
          "0108.png",
          "0109.png",
        ],
        image_length: 29,
        type: hmUI.data_type.WEATHER_CURRENT,
        show_level: hmUI.show_level.ONLY_NORMAL,
      },
    );

    normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 299,
      y: 374,
      font_array: [
        "0070.png",
        "0071.png",
        "0072.png",
        "0073.png",
        "0074.png",
        "0075.png",
        "0076.png",
        "0077.png",
        "0078.png",
        "0079.png",
      ],
      padding: false,
      h_space: -3,
      align_h: hmUI.align.LEFT,
      type: hmUI.data_type.BATTERY,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_battery_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
      x: 279,
      y: 375,
      src: "0035.png",
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    let screenType = hmSetting.getScreenType();
    if (screenType != hmSetting.screen_type.AOD) {
      normal_calorie_linear_scale = hmUI.createWidget(hmUI.widget.FILL_RECT);
    }

    // normal_calorie_linear_scale = hmUI.createWidget(hmUI.widget.Linear_Scale, {
    // start_x: 67,
    // start_y: 182,
    // color: 0xFF00FE86,
    // lenght: 51,
    // line_width: 6,
    // vertical: False,
    // mirror: False,
    // inversion: False,
    // type: hmUI.data_type.CAL,
    // show_level: hmUI.show_level.ONLY_NORMAL,
    // });

    const calorie = hmSensor.createSensor(hmSensor.id.CALORIE);
    calorie.addEventListener(hmSensor.event.CHANGE, function () {
      scale_call();
    });

    normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 7,
      y: 168,
      font_array: [
        "0070.png",
        "0071.png",
        "0072.png",
        "0073.png",
        "0074.png",
        "0075.png",
        "0076.png",
        "0077.png",
        "0078.png",
        "0079.png",
      ],
      padding: false,
      h_space: -3,
      align_h: hmUI.align.LEFT,
      type: hmUI.data_type.CAL,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    if (screenType != hmSetting.screen_type.AOD) {
      normal_heart_rate_linear_scale = hmUI.createWidget(hmUI.widget.FILL_RECT);
    }

    // normal_heart_rate_linear_scale = hmUI.createWidget(hmUI.widget.Linear_Scale, {
    // start_x: 67,
    // start_y: 240,
    // color: 0xFF63DA81,
    // lenght: 47,
    // line_width: 8,
    // vertical: False,
    // mirror: False,
    // inversion: False,
    // type: hmUI.data_type.HEART,
    // show_level: hmUI.show_level.ONLY_NORMAL,
    // });

    const heart_rate = hmSensor.createSensor(hmSensor.id.HEART);
    heart_rate.addEventListener(hmSensor.event.CHANGE, function () {
      scale_call();
    });

    normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 20,
      y: 228,
      font_array: [
        "0070.png",
        "0071.png",
        "0072.png",
        "0073.png",
        "0074.png",
        "0075.png",
        "0076.png",
        "0077.png",
        "0078.png",
        "0079.png",
      ],
      padding: false,
      h_space: -3,
      align_h: hmUI.align.LEFT,
      type: hmUI.data_type.HEART,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 6,
      y: 292,
      font_array: [
        "0070.png",
        "0071.png",
        "0072.png",
        "0073.png",
        "0074.png",
        "0075.png",
        "0076.png",
        "0077.png",
        "0078.png",
        "0079.png",
      ],
      padding: false,
      h_space: -3,
      unit_sc: "0033.png",
      unit_tc: "0033.png",
      unit_en: "0033.png",
      dot_image: "0034.png",
      align_h: hmUI.align.LEFT,
      type: hmUI.data_type.DISTANCE,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_distance_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
      x: 62,
      y: 305,
      src: "0046.png",
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    if (screenType != hmSetting.screen_type.AOD) {
      normal_step_linear_scale = hmUI.createWidget(hmUI.widget.FILL_RECT);
    }

    // normal_step_linear_scale = hmUI.createWidget(hmUI.widget.Linear_Scale, {
    // start_x: 176,
    // start_y: 369,
    // color: 0xFF24DB64,
    // lenght: 69,
    // line_width: 7,
    // vertical: False,
    // mirror: False,
    // inversion: False,
    // type: hmUI.data_type.STEP,
    // show_level: hmUI.show_level.ONLY_NORMAL,
    // });

    const step = hmSensor.createSensor(hmSensor.id.STEP);
    step.addEventListener(hmSensor.event.CHANGE, function () {
      scale_call();
    });

    normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: 179,
      y: 380,
      font_array: [
        "0070.png",
        "0071.png",
        "0072.png",
        "0073.png",
        "0074.png",
        "0075.png",
        "0076.png",
        "0077.png",
        "0078.png",
        "0079.png",
      ],
      padding: false,
      h_space: -3,
      align_h: hmUI.align.LEFT,
      type: hmUI.data_type.STEP,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_system_lock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 351,
      y: 323,
      src: "0055.png",
      type: hmUI.system_status.LOCK,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_system_dnd_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 276,
      y: 323,
      src: "0054.png",
      type: hmUI.system_status.DISTURB,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 371,
      y: 323,
      src: "0067.png",
      type: hmUI.system_status.DISCONNECT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 299,
      y: 323,
      src: "0052.png",
      type: hmUI.system_status.CLOCK,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
      x: -7,
      y: 104,
      week_en: [
        "0026.png",
        "0027.png",
        "0028.png",
        "0029.png",
        "0030.png",
        "0031.png",
        "0032.png",
      ],
      week_tc: [
        "0026.png",
        "0027.png",
        "0028.png",
        "0029.png",
        "0030.png",
        "0031.png",
        "0032.png",
      ],
      week_sc: [
        "0026.png",
        "0027.png",
        "0028.png",
        "0029.png",
        "0030.png",
        "0031.png",
        "0032.png",
      ],
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_date_img_date_year = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      year_startX: 100,
      year_startY: 69,
      year_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_zero: 1,
      year_space: -4,
      year_align: hmUI.align.LEFT,
      year_is_character: false,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      day_startX: 36,
      day_startY: 69,
      day_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_zero: 1,
      day_space: -3,
      day_align: hmUI.align.LEFT,
      day_is_character: false,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      month_startX: 69,
      month_startY: 69,
      month_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_zero: 1,
      month_space: -5,
      month_align: hmUI.align.LEFT,
      month_is_character: false,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    normal_digital_clock_img_time_AmPm = hmUI.createWidget(
      hmUI.widget.IMG_TIME,
      {
        am_x: 313,
        am_y: 305,
        am_sc_path: "0024.png",
        am_en_path: "0024.png",
        pm_x: 313,
        pm_y: 305,
        pm_sc_path: "0025.png",
        pm_en_path: "0025.png",
        show_level: hmUI.show_level.ONLY_NORMAL,
      },
    );

    normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_startX: 282,
      hour_startY: 125,
      hour_array: [
        "0001.png",
        "0002.png",
        "0003.png",
        "0004.png",
        "0005.png",
        "0006.png",
        "0007.png",
        "0008.png",
        "0009.png",
        "0010.png",
      ],
      hour_zero: 1,
      hour_space: 0,
      hour_align: hmUI.align.LEFT,

      minute_startX: 282,
      minute_startY: 221,
      minute_array: [
        "0001.png",
        "0002.png",
        "0003.png",
        "0004.png",
        "0005.png",
        "0006.png",
        "0007.png",
        "0008.png",
        "0009.png",
        "0010.png",
      ],
      minute_zero: 1,
      minute_space: 0,
      minute_follow: 0,
      minute_align: hmUI.align.LEFT,

      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    idle_date_img_date_year = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      year_startX: 199,
      year_startY: 92,
      year_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      year_zero: 1,
      year_space: -4,
      year_align: hmUI.align.LEFT,
      year_is_character: false,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      day_startX: 138,
      day_startY: 92,
      day_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      day_zero: 1,
      day_space: -3,
      day_align: hmUI.align.LEFT,
      day_is_character: false,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    idle_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      month_startX: 170,
      month_startY: 92,
      month_sc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_tc_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_en_array: [
        "0011.png",
        "0012.png",
        "0013.png",
        "0014.png",
        "0015.png",
        "0016.png",
        "0017.png",
        "0018.png",
        "0019.png",
        "0020.png",
      ],
      month_zero: 1,
      month_space: -5,
      month_align: hmUI.align.LEFT,
      month_is_character: false,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    idle_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
      am_x: 175,
      am_y: 316,
      am_sc_path: "0024.png",
      am_en_path: "0024.png",
      pm_x: 175,
      pm_y: 316,
      pm_sc_path: "0025.png",
      pm_en_path: "0025.png",
      show_level: hmUI.show_level.ONAL_AOD,
    });

    idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_startX: 143,
      hour_startY: 128,
      hour_array: [
        "0001.png",
        "0002.png",
        "0003.png",
        "0004.png",
        "0005.png",
        "0006.png",
        "0007.png",
        "0008.png",
        "0009.png",
        "0010.png",
      ],
      hour_zero: 1,
      hour_space: 0,
      hour_align: hmUI.align.LEFT,

      minute_startX: 143,
      minute_startY: 226,
      minute_array: [
        "0001.png",
        "0002.png",
        "0003.png",
        "0004.png",
        "0005.png",
        "0006.png",
        "0007.png",
        "0008.png",
        "0009.png",
        "0010.png",
      ],
      minute_zero: 1,
      minute_space: 0,
      minute_follow: 0,
      minute_align: hmUI.align.LEFT,

      show_level: hmUI.show_level.ONAL_AOD,
    });

    idle_temperature_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: "IMG_0708.png",
      show_level: hmUI.show_level.ONAL_AOD,
    });

    function scale_call() {
      console.log("update scales CALORIE");

      let valueCalories = calorie.current;
      let targetCalories = calorie.target;
      let progressCalories = valueCalories / targetCalories;
      if (progressCalories > 1) progressCalories = 1;
      let progress_ls_normal_calorie = progressCalories;

      if (screenType != hmSetting.screen_type.AOD) {
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

        normal_calorie_linear_scale.setProperty(hmUI.prop.MORE, {
          x: start_x_normal_calorie_draw,
          y: start_y_normal_calorie_draw,
          w: lenght_ls_normal_calorie_draw,
          h: line_width_ls_normal_calorie_draw,
          color: color_ls_normal_calorie,
        });
      }

      console.log("update scales HEART");

      let valueHeartRate = heart_rate.last;
      let targetHeartRate = 179;
      let progressHeartRate = (valueHeartRate - 71) / (targetHeartRate - 71);
      if (progressHeartRate < 0) progressHeartRate = 0;
      if (progressHeartRate > 1) progressHeartRate = 1;
      let progress_ls_normal_heart_rate = progressHeartRate;

      if (screenType != hmSetting.screen_type.AOD) {
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

        normal_heart_rate_linear_scale.setProperty(hmUI.prop.MORE, {
          x: start_x_normal_heart_rate_draw,
          y: start_y_normal_heart_rate_draw,
          w: lenght_ls_normal_heart_rate_draw,
          h: line_width_ls_normal_heart_rate_draw,
          color: color_ls_normal_heart_rate,
        });
      }

      console.log("update scales STEP");

      let valueStep = step.current;
      let targetStep = step.target;
      let progressStep = valueStep / targetStep;
      if (progressStep > 1) progressStep = 1;
      let progress_ls_normal_step = progressStep;

      if (screenType != hmSetting.screen_type.AOD) {
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

        normal_step_linear_scale.setProperty(hmUI.prop.MORE, {
          x: start_x_normal_step_draw,
          y: start_y_normal_step_draw,
          w: lenght_ls_normal_step_draw,
          h: line_width_ls_normal_step_draw,
          color: color_ls_normal_step,
        });
      }
    }

    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: function () {
        scale_call();
        normal_frame_animation_1.setProperty(
          hmUI.prop.ANIM_STATUS,
          hmUI.anim_status.START,
        );
      },
      pause_call: function () {
        normal_frame_animation_1.setProperty(
          hmUI.prop.ANIM_STATUS,
          hmUI.anim_status.STOP,
        );
      },
    });

    //dynamic modify end
  },

  onInit() {
    console.log("index page.js on init invoke");
  },

  build() {
    console.log("index page.js on build invoke");
  },

  onDestroy() {
    console.log("index page.js on destroy invoke");
  },
});
