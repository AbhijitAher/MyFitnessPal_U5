const express = require("express");

const Food = require("../models/food.model");

const router = express.Router();

router.post("/",async (req, res) => {
  try {
    const food = await Food.create({
      name: req.body.name,
      calories: req.body.calories,
      carbs: req.body.carbs,
      fat: req.body.fat,
      protein: req.body.protein,
    });

    console.log(food);
    return res.status(201).send(food);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find().lean().exec();

    console.log(foods);
    return res.status(201).send(foods);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/:name", async (req, res) => {
    try {
      const food = await Food.find({ name: req.params.name}).lean().exec();
  
      console.log(food);
      return res.status(201).send(food);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

module.exports = router;
