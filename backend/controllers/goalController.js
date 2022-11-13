// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals=(req,res)=>{
    res.status(200).json({
        message:'Get Goal',
    })
}

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoals=(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:'Create Goal',
    })
}

// @desc    Update goals
// @route   PUT /api/goals/id
// @access  Private
const updateGoals=(req,res)=>{
    res.status(200).json({
        message:`Edit Goal ${req.params.id}`,
    })
}

// @desc    Delete goals
// @route   Delete /api/goals/id
// @access  Private
const deleteGoals=(req,res)=>{
    res.status(200).json({
        message:`Delete Goal ${req.params.id}`,
    })
}

module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}