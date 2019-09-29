namespace YngStrs.PersonalityTests.Api.Domain.SQL
{
    public class PersonalityTestSqlQueries
    {
        public static readonly string InitialTest =
            @"SELECT 
              tq.id as question_id,
              tq.serial_number as question_number,
              sub_qo.qo_id as option_id,
              qot.description as option_description,
              tr.value as option_result,
              sub_qo.is_text_only as is_text_only,
              sub_qo.image_data as image_data
              FROM public.personality_tests as pt
              INNER JOIN public.test_questions as tq 
              ON pt.id = tq.personality_test_id
              INNER JOIN 
              (
              	SELECT qo.id as qo_id, qo.test_question_id as quest_id,qo.is_text_only as is_text_only, oib.image_data as image_data
              	FROM public.option_image_binaries as oib
              	INNER JOIN public.question_options as qo
              	ON qo.option_image_binary_id = oib.id
              	UNION
              	SELECT iqo.id as qo_id, iqo.test_question_id  as quest_id,iqo.is_text_only as is_text_only, null as image_data
              	FROM public.question_options as iqo
              	WHERE iqo.option_image_binary_id IS NULL
              ) as sub_qo
              ON tq.id = sub_qo.quest_id
              INNER JOIN public.question_option_titles as qot 
              ON qot.question_option_id = sub_qo.qo_id
              INNER JOIN public.result_option_maps as rom
              ON rom.question_option_id = sub_qo.qo_id
              INNER JOIN public.test_results as tr
              ON tr.id = rom.test_result_id
              ORDER BY tq.serial_number";
    }
}